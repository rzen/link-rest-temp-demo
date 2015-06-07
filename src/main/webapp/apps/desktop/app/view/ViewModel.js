Ext.define('Builder.view.ViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.builder_main',

	formulas: {
	},

	data: {
		userName: 'Andrew Stefanov'
	},

	links: {
	},

	stores: {

		loads: {
			model: 'Builder.model.Load',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'type',
				direction: 'ASC'
			}, {
				property: 'description',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/load',
				type: 'linkrest'
			}
		}
		
	}
});