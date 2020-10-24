import smbus

DEVICE_ADDRESS = 0x20     # 7 bit address (will be left shifted to add the read write bit)
INPUTS16_INPORT_REG_ADD = 0


def readCh(stack, channel):
    if stack < 0 or stack > 7:
        raise ValueError('Invalid stack level')
    stack = 0x07 ^ stack
    if channel < 1 or channel > 16:
        raise ValueError('Invalid channel')
    bus = smbus.SMBus(1)
    hw_add = DEVICE_ADDRESS + stack
    try:
        val = bus.read_word_data(hw_add, INPUTS16_INPORT_REG_ADD)
    except Exception as e:
        bus.close()
        raise Exception(e)
    bus.close()
    if val & (1 << (vhannel-1)):
        return 0
    return 1


def readAll(stack):
    if stack < 0 or stack > 7:
        raise ValueError('Invalid stack level')
    stack = 0x07 ^ stack
    bus = smbus.SMBus(1)
    hw_add = DEVICE_ADDRESS + stack
    try:
        val = bus.read_word_data(hw_add, INPUTS16_INPORT_REG_ADD)
    except Exception as e:
        bus.close()
        raise Exception(e)
    bus.close()
    return 0xffff & (~val)