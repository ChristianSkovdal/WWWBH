function invokeMethod(selector, methodName, argument) {
    Ext.ComponentQuery.query(selector)[0][methodName](argument);
}

compactTpl = new Ext.XTemplate(`
<tpl if="details == true">
    Details...
<tpl else>
    <div class="card card-background">
        <div class="profileimg">
            <img src="/assets/b/{img}"/>
        </div>
        <div class="title">
            {name}
        </div>
        <div>
            New world lager
        </div>
        <br>
        <div class="table">
           <div class="cell">ABV</div>
           <div class="cell middlecell">IBU</div>
           <div class="cell">OG</div>
        </div>
        <div class="table">
           <div class="cell">fdfd</div>
           <div class="cell middlecell">fdsfs</div>
           <div class="cell">fdsfds</div>
        </div>
        <br>
        <div>
        <a href="javascript:invokeMethod(\'pview\', \'showDetails\', '{name}');">
            Read More
        </a>
        </div>
    </div>
</tpl>
`);

Ext.define('WWWBH.view.PublicationSection', {
    extend: 'Ext.Panel',
    xtype: 'psection',

    layout: 'fit',
    cls: 'psection',
    margin: 10,

    items: [
        {
            xtype: 'dataview',
            inline: true,
            scrollable: false,
            itemTpl: compactTpl
        }
    ]
});

Ext.define('WWWBH.view.PublicationViewer', {
    extend: 'Ext.Container',
    xtype: 'pview',
    
    style: 'background: transparent;',

    layout: {
        type: 'card',
        animation: {
            duration: 300,
            easing: 'ease-in',
            type: 'slide',
            direction: 'right'
        }
    },

    listeners: {
        initialize: function () {

            this.store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: '/assets/b/b.json',

                    reader: {
                        type: 'json',
                    }
                }
            });

            for (let c of this.query('psection')) {

                c.down('dataview').setStore(Ext.create('Ext.data.ChainedStore', {
                    source: this.store,
                    filters: [
                        function (item) {
                            return item.get('category') === c.category;
                        }
                    ]
                }));

            }

        }
    }, 

    items: [

        {
            xtype: 'container',
            margin: 20,
            scrollable: 'y',

            items: [
                {
                    xtype: 'psection',
                    title: 'Regulars',
                    category: undefined
                },
                {
                    xtype: 'psection',
                    title: 'Seasonals',
                    category: 'Seasonals'
                },
                {
                    xtype: 'psection',
                    title: 'Specialty Brews',
                    category: 'Speciality'
                }
            ]
        },
        //{
        //    xtype: 'container',
        //    tpl: detailsTpl
        //}
    ],

    showDetails(name) {


        let record = this.store.findRecord('name', name);
        record.set('details', true);
        //this.tpl.overwrite(this.body, data);


    }
});