module.exports = function(RED) {
    "use strict";
    var I2C = require("i2c-bus");
    const DEFAULT_HW_ADD = 0x20;
    const IN_REG = 0x00;
    const mask = new ArrayBuffer(16);
    mask[0] = 0x80;
    mask[1] = 0x40;
    mask[2] = 0x20;
    mask[3] = 0x10;
    mask[4] = 0x08;
    mask[5] = 0x04;
    mask[6] = 0x02;
    mask[7] = 0x01;
    mask[8] = 0x8000;
    mask[9] = 0x4000;
    mask[10] = 0x2000;
    mask[11] = 0x1000;
    mask[12] = 0x0800;
    mask[13] = 0x0400;
    mask[14] = 0x0200;
    mask[15] = 0x0100;
   
    // The Opto input read Node
    function OptoInputNode(n) {
        RED.nodes.createNode(this, n);
        this.stack = parseInt(n.stack);
        this.channel = parseInt(n.channel);
        this.payload = n.payload;
        this.payloadType = n.payloadType;
        var node = this;
 
        node.port = I2C.openSync( 1 );
        node.on("input", function(msg) {
            var myPayload;
            var stack = node.stack;
            if (isNaN(stack)) stack = msg.stack;
            stack = parseInt(stack);
            var channel = node.channel;
            if (isNaN(channel)) channel = msg.channel;
            channel = parseInt(channel);
            //var buffcount = parseInt(node.count);
            if (isNaN(stack + 1)) {
                this.status({fill:"red",shape:"ring",text:"Stack level ("+stack+") value is missing or incorrect"});
                return;
            } else if (isNaN(channel) ) {
                this.status({fill:"red",shape:"ring",text:"Relay number  ("+channel+") value is missing or incorrect"});
                return;
            } else {
                this.status({});
            }
            var hwAdd = DEFAULT_HW_ADD;
            if(stack < 0){
                stack = 0;
            }
            if(stack > 7){
              stack = 7;
            }
            //check the type of io_expander
            hwAdd += stack ^ 0x07;
            var rawData = 0x0000;
            try{
              rawData = node.port.readWordSync(hwAdd, IN_REG );
              
              if(channel < 1){
                channel = 1;
              }
              if(channel > 16){
                channel = 16;
              }
              channel-= 1;//zero based
              rawData = ~rawData;
              if( (rawData & mask[channel]) != 0){
                msg.payload = 1;
              }
              else{
                msg.payload = 0;
              }
              node.send(msg);             
            }catch(err) {
                this.error(err,msg);                          
            }
        });

        node.on("close", function() {
            node.port.closeSync();
        });
    }
    RED.nodes.registerType("16inputs", OptoInputNode);

}
