Ext.define('WWWBH.controls.HtmlContainer', {
    extend: 'Ext.Container',
    xtype: 'htmlcntr',

    layout: 'fit',
    style: 'background:transparent;',

    config: {
        url: false,
        bodyStyle: null
    },

    updateBodyStyle: function (style) {
        this.down('#body').setStyle(style);;
    },

    updateUrl: function (url) {
        if (url) {
            this.setMasked({
                xtype: 'loadmask', message: 'Loading...'
            });
            Ext.Ajax.request({
                url: url,
                scope: this,
                success: function (response) {
                    this.down('#body').setHtml(response.responseText);
                    this.setMasked(false);
                }
            });
        }
    },
    reload: function () {
        this.updateUrl(this.getUrl());
    },

    items: [
        {
            itemId: 'body',
            xtype: 'container',
            margin: 20,
            shadow: true,
            style: 'background:yellow;',
            scrollable: true,
            padding: 20
        }
    ]
});