# cli-weather

![Result example](/ressources/weather.jpg)


### DESCRIPTION

You love your terminal but you have no way to use it as a weather station ?
cli weather is here ! You just need to install the library then start to use your weather station.

### INTRODUCTION

- Clone the project on your computer : https://github.com/Mweydert/rdd-cdd-tdd
- Install the library
- Use it

### INSTALLATION

Global installation :
```sh
> npm install
> npm link
```
Then you can use the library using the simple command weather.

### HOW TO USE IT

You can print the library help with :
```sh
> weather --help
```


To print weather's location use the option -v
```sh
> weather -a courbevoie -v
```

To save preset(s) use the option -s
```sh
> weather -a courbevoie -s
```

### EXAMPLES

This is a list of examples that aim to help to discover availables options

- Location :


with an adress (city) :
```sh
> weather -a courbevoie
```

with coordonates :
```sh
> weather --long 12.12 --lat 1.1
```


- Units    


Default units are in °F(temperature) and mph(wind).



To show results in metric system use -c
```sh
> weather -a courbevoie -c
```


### RESULTS

![Result example](/ressources/resultExample.PNG)
