Ext.define('WWWBH.view.PublicationSection', {
    extend: 'Ext.Panel',
    xtype: 'psection',

    layout: 'fit',
    cls: 'psection',

    items: [

        {
            xtype: 'dataview',
        }
    ]
});

Ext.define('WWWBH.view.PublicationViewer', {
    extend: 'Ext.Container',
    xtype: 'pview',

    layout: 'fit',
    style: 'background: transparent;',

    items: [

        {
            xtype: 'container',
            margin: 20,
            shadow: true,
            style: 'background: white',

            items: [
                {
                    xtype: 'psection',
                    title: 'Tilg&aelig;ngelighed'
                }
            ]
        }
    ]
});