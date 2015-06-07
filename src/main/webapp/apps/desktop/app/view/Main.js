Ext.define('Builder.view.Main', {
	extend: 'Ext.container.Container',
	
	requires: [
	],

	xtype: 'builder_main',
	
	controller: 'builder_main',
	viewModel: {
		type: 'builder_main'
	},

	layout: 'border',

	padding: 10,

	items: [
		{
			title: 'Loads',
			xtype: "load_grid",
			region: "west",
			bind: "{loads}",
			width: 250
		}, {
			title: 'Features',
			xtype: "feature_grid",
			region: "west",
			bind: "{features}",
			width: 400
		}, {
			title: 'Entries',
			xtype: "entry_grid",
			region: "center",
			bind: "{entries}"
		}
	]
});