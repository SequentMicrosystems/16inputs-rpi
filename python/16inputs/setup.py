import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="lib16in",
    version="1.0.0",
    author="Alexandru Burcea",
    author_email="olcit@gmail.com",
    description="A set of functions to control Sequent Microsystems 16-INPUTS card for Raspberry Pi",
    license='MIT',
    url="https://github.com/SequentMicrosystems/16inputs-rpi",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 2/3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)