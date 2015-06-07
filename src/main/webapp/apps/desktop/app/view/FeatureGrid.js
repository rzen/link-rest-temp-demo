Ext.define('Builder.view.FeatureGrid', {
	extend: 'Builder.view.BaseGrid',

	xtype: 'feature_grid',

	reference: 'featureGrid',

	// tools: [
	// 	{
	// 		type: 'plus',
	// 		handler: 'onFeatureAdd'
	// 	}
	// ],

	columns: [
		{
			header: 'Name',
			dataIndex: 'name',
			editor: 'textfield'
		}, {
			header: 'Feature',
			dataIndex: 'feature',
			editor: 'textfield'
		}, {
			header: 'Stream',
			dataIndex: 'stream',
			editor: 'textfield'
		}
	]
})