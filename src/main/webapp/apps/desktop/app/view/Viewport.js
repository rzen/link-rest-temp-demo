Ext.define('Builder.view.Viewport', {
	extend: 'Ext.container.Viewport',
	
	requires: [
		'Ext.tab.Panel'
	],

	xtype: 'builder_viewport',
	
	contoller: 'builder_main',
	viewModel: {
		xtype: 'builder_main'
	},

	layout: 'border',

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