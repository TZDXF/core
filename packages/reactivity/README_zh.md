# @vue/reactivity

## Usage Note

This package is inlined into Global & Browser ESM builds of user-facing renderers (e.g. `@vue/runtime-dom`), but also published as a package that can be used standalone. The standalone build should not be used alongside a pre-bundled build of a user-facing renderer, as they will have different internal storage for reactivity connections. A user-facing renderer should re-export all APIs from this package.

该包内联到面向用户的渲染器的Global & Brower ESM构建中（例如 `@vue/runtime-dom`），但也作为可以独立使用的包发布。独立构建不应与面向用户的渲染器的预捆绑构建一起使用，因为它们将具有不同的内部存储来用于反应性连接。面向用户的渲染器应该重新输出此包中的所有API。

For full exposed APIs, see `src/index.ts`.

## Credits

The implementation of this module is inspired by the following prior art in the JavaScript ecosystem:
该模块的实现受到JavaScript生态系统中以下现有技术的启发：


- [Meteor Tracker](https://docs.meteor.com/api/tracker.html)
- [nx-js/observer-util](https://github.com/nx-js/observer-util)
- [salesforce/observable-membrane](https://github.com/salesforce/observable-membrane)

## Caveats

- Built-in objects are not observed except for `Array`, `Map`, `WeakMap`, `Set` and `WeakSet`.


- 除了`Array`、`Map`、`WeakMap`、`Set`和`WeakSet`之外，不会观察到内置对象。
