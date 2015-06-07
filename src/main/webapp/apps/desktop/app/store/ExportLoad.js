Ext.define('Builder.store.ExportLoad', {
	extend:'Ext.data.Store',

	model: 'Builder.model.Load',

	proxy: {
		url: '/atm/load/builder/rest/load',
		type: 'linkrest',
		
		include: [
			'id',
			'description', 'type',
			'features.entries.feature'
		]
	}
});