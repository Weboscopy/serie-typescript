"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
const logDate = (fn) => {
    return (...args) => {
        console.log(new Date().toLocaleString());
        return fn(...args);
    };
};
let add = (a, b) => {
    console.log(a + b);
};
// add = logDate(add)
// add(2, 3)
let User = (() => {
    let _classDecorators = [classDecorator1, classDecorator2];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _staticExtraInitializers = [];
    let _instanceExtraInitializers = [];
    let _static_description_decorators;
    let _static_description_initializers = [];
    let _get_fullName_decorators;
    let _generateRandomPassword_decorators;
    let _getPosts_decorators;
    let _getPost_decorators;
    var User = _classThis = class {
        constructor(firstName, lastName) {
            this.firstName = (__runInitializers(this, _instanceExtraInitializers), firstName);
            this.lastName = lastName;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        generateRandomPassword() {
            console.log(window.crypto.randomUUID());
        }
        getPosts() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield fetch("http://jsonplaceholder.typicode.com/posts");
                const data = yield res.json();
                return data;
            });
        }
        getPost(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield fetch("http://jsonplaceholder.typicode.com/posts/" + id);
                const data = yield res.json();
                return data;
            });
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        _static_description_decorators = [fieldDecorator1];
        _get_fullName_decorators = [getterDecorator, getterDecorator2("Nom complet")];
        _generateRandomPassword_decorators = [methodDecorator2("Fonction décorateur"), methodDecorator1];
        _getPosts_decorators = [AsyncMethodDecorator];
        _getPost_decorators = [AsyncMethodDecorator];
        __esDecorate(_classThis, null, _get_fullName_decorators, { kind: "getter", name: "fullName", static: false, private: false, access: { has: obj => "fullName" in obj, get: obj => obj.fullName } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _generateRandomPassword_decorators, { kind: "method", name: "generateRandomPassword", static: false, private: false, access: { has: obj => "generateRandomPassword" in obj, get: obj => obj.generateRandomPassword } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPosts_decorators, { kind: "method", name: "getPosts", static: false, private: false, access: { has: obj => "getPosts" in obj, get: obj => obj.getPosts } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPost_decorators, { kind: "method", name: "getPost", static: false, private: false, access: { has: obj => "getPost" in obj, get: obj => obj.getPost } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _static_description_decorators, { kind: "field", name: "description", static: true, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } } }, _static_description_initializers, _staticExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _staticExtraInitializers);
    })();
    _classThis.description = __runInitializers(_classThis, _static_description_initializers, "Classe utilisée pour générer des Utilisateurs");
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
function methodDecorator1(originalMethod, context) {
    return function () {
        console.log(`Méthode ${String(context.name)} - ${new Date().toLocaleDateString()}`);
        originalMethod.call(this);
    };
}
function methodDecorator2(msg) {
    return function (originalMethod, context) {
        return function () {
            console.log(`${msg}`);
            originalMethod.call(this);
        };
    };
}
function AsyncMethodDecorator(originalMethod, context) {
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.time(String(context.name));
            const post = yield originalMethod.apply(this, args);
            console.timeEnd(String(context.name));
            return post;
        });
    };
}
function fieldDecorator1(target, context) {
    if (context.static) {
        return function (prop) {
            return prop.toUpperCase();
        };
    }
}
function getterDecorator(getter, context) {
    return function () {
        return getter.call(this).toUpperCase();
    };
}
function getterDecorator2(val) {
    return function (getter, context) {
        return function () {
            return val + " : " + getter.call(this);
        };
    };
}
function classDecorator1(myclass, context) {
    myclass.prototype.date = new Date().toLocaleString();
}
// Version Mixin
function classDecorator2(base, context) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.date = new Date().toLocaleString();
        }
    };
}
const user = new User("tom", "bombadil");
user.generateRandomPassword();
console.log(User.description);
console.log(user.fullName);
console.log(user);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield user.getPosts();
    console.log(posts);
    const post = yield user.getPost(3);
    console.log(post);
}))();
