Ext.define('Builder.view.Viewport', {
	extend: 'Ext.tab.Panel',
	
	xtype: 'builder_vieport',
	
	// controller: 'builder_main',
	// viewModel: {
	// 	type: 'builder_main'
	// },

	layout: 'border',

	items: [
		{
		// 	title: 'Loads',
		// 	xtype: "loads_tab"
		// }, '->', {
			title: 'Config',
			xtype: "config_tab"
		}
	]
});