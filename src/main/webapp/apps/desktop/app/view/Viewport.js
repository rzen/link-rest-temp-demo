Ext.define('Builder.view.Viewport', {
	extend: 'Ext.container.Viewport',
	
	xtype: 'builder_vieport',
	
	items: [
		{
			xtype: 'chrome_bar',
			region: 'north'
		}, {
			region: 'center',
			xtype: 'tabpanel',
			items: [
				{
					title: 'Loads',
					xtype: 'load_tab'
				}, {
					tabConfig: {
						xtype: 'tbfill'
					}
				}, {
					title: 'Config',
					xtype: 'config_tab'
				}
			]
		}
	]
});