Ext.define('Builder.view.load.Tab', {
	extend: 'Ext.container.Container',
	
	requires: [
	],

	xtype: 'load_tab',

	defaults: {
		padding: 10
	},

	items: [
		{
			xtype: 'feature_screen'
		}, {
			xtype: 'feature_screen'
		}, {
			xtype: 'feature_screen'
		}
	]
});