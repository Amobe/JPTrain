var DEBUG = false;

function logging(msg) {
    if(DEBUG) console.log(msg);
};

function inherits(ctor, superCtor) {
    ctor._super = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurablt: true
        }
    });
};

function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.callback = callback;
    if(xobj.overrideMimeType) {
        xobj.overrideMimeType('application/json');
    }
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function() {
        if(this.readyState === 4) {
            this.callback(this);
        }
    }
    xobj.send(null);
}
