# Functional Programming with Python


>>> def f(x): return x % 2 != 0 and x % 3 != 0
...
>>> list(filter(f, range(2, 25)))
[5, 7, 11, 13, 17, 19, 23]
>>> def cube(x): return x*x*x
...
>>> list(map(cube, range(1, 11)))
[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
>>> import functools
>>> def add(x,y): return x+y
...
>>> functools.reduce(add, range(1, 11))
55
>>>

[Stackoverflow answer to Map, Filter, Reduce in Python3](https://stackoverflow.com/questions/13638898/how-to-use-filter-map-and-reduce-in-python-30
[Pydash - lodash for Python](https://pydash.readthedocs.io)
