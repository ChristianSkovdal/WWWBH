Ext.define('WWWBH.controls.ResponsiveBar', {
    extend: 'Ext.Toolbar',
    xtype: 'responsivebar',

    listeners: {
        painted: function (tb) {

            tb.up('main2').add({
                xtype: 'container',
                hidden: true,
                width: 150,
                layout: 'hbox',
                items: tb.buttons.filter(r => r.xtype == 'button'),
                itemId: 'cmdPanel'
            });

            tb.add({
                xtype: 'button',
                iconCls: 'x-fa fa-bars',
                cls: 'btn',
                hidden: true,
                itemId: 'cmdPanelBtn',

                handler: function (btn) {
                    btn.up('#cmdPanel').setHidden(false);
                }
            });
        },
        resize: function () {
            debugger;
            if (width <= tb.showAsButtonWidth && oldWidth > tb.showAsButtonWidth) {
                    
            }
            else {
            }
        }
    },
    

});