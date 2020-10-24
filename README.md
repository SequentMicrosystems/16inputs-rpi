[![16inputs-rpi](readmeres/sequent.jpg)](https://www.sequentmicrosystems.com)

# 16inputs-rpi

This is the command line and python library to control the Sequent Microsystems 16-Inputs Card for Raspberry PI. This 8 layers stackable card contains 16 optically isolated digital inputs with reverse polarity protection.

For using this card enable Raspberry Pi I2C communication
```bash
~$ sudo raspi-config
```

## Usage

```bash
~$ git clone https://github.com/SequentMicrosystems/16inputs-rpi.git
~$ cd 16inputs-rpi/
~/16inputs-rpi$ sudo make install
```

Now you can access all the functions of the 16-Inputs board through the command "16inputs". Use -h option for help:
```bash
~$ 16inputs -h
```

If you clone the repository any update can be made with the following commands:

```bash
~$ cd 16inputs-rpi/  
~/16inputs-rpi$ git pull
~/16inputs-rpi$ sudo make install
```  

## [Python](https://github.com/SequentMicrosystems/16inputs-rpi/tree/main/python)
