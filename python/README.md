# lib16in

This is the python library to control [16- INPUTS card for Raspberry](https://www.sequentmicrosystems.com/)

## Install

```bash
~$ sudo apt-get update
~$ sudo apt-get install build-essential python-pip python-dev python-smbus git
~$ git clone https://github.com/SequentMicrosystems/16inputs-rpi.git
~$ cd 16inputs-rpi/python/16inputs/
~/16inputs-rpi/python/16inputs$ sudo python setup.py install
```

for Python 3.x usge replace last line with:
```bash
~/16inputs-rpi/python/16inputs$ sudo python3 setup.py install
```

## Update

```bash
~$ cd 16inputs-rpi/
~/16inputs-rpi$ git pull
~$ cd 16inputs-rpi/python/16inputs/
~/16inputs-rpi/python/16inputs$ sudo python setup.py install
```

## Usage 

Now you can import the lib16in library and use its functions. To test, read the channel 1:

```bash
~$ python
Python 2.7.9 (default, Sep 17 2016, 20:26:04)
[GCC 4.9.2] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import lib16in
>>> lib16in.readCh(1)
0
>>>
```
## [Documentation](https://github.com/SequentMicrosystems/16inputs-rpi/blob/master/python/16inputs/README.md). 

This library works with both Python2 and Python3