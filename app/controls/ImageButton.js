Ext.define('WWWBH.controls.ImageButton', {
    extend: 'Ext.Container',
    xtype: 'imgbtn',

    config: {
        image: null,
        pressed: false,
        pressedCls: '',
        normalCls: ''
    },

    applyImage(value) {
        this.setHtml(`<img class="normal" src="${value}"></b>`);
    },

    applyPressed(value) {
        this.removeCls(value ? this._normalCls : this._pressedCls);
        this.addCls(value ? this._pressedCls : this._normalCls);
    },

    listeners: {
        painted: function (c) {
            c.el.on('click', function (e) {

                let pressed = !this.getPressed();
                this.setPressed(pressed);
                this.fireEvent('click', c, pressed);
            }, c);
        }
    }
});