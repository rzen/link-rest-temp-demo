Ext.define('Builder.view.LoadGrid', {
	extend: 'Builder.view.BaseGrid',

	xtype: 'load_grid',

	reference: 'loadGrid',

	// tools: [
	// 	{
	// 		type: 'plus',
	// 		handler: 'onLoadAdd'
	// 	}
	// ],

	columns: [
		{
			header: 'Type',
			dataIndex: 'type',
			editor: 'textfield'
		}, {
			header: 'Description',
			dataIndex: 'description',
			editor: 'textareafield'
		}
	]
})