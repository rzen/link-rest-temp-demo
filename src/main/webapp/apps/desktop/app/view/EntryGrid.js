Ext.define('Builder.view.EntryGrid', {
	extend: 'Builder.view.BaseGrid',

	xtype: 'entry_grid',

	reference: 'entryGrid',

	// tools: [
	// 	{
	// 		type: 'plus',
	// 		handler: 'onEntryAdd'
	// 	}
	// ],

	columns: [
		{
			header: 'Part',
			dataIndex: 'part',
			editor: 'textfield'
		}, {
			header: 'Name',
			dataIndex: 'name',
			editor: 'textfield'
		}, {
			header: 'Value',
			dataIndex: 'value',
			editor: 'textfield'
		}
	]
});