Ext.define('Builder.view.feature.ViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.feature',

	formulas: {
	},

	data: {
	},

	links: {
	},

	stores: {

		features: {
			model: 'Builder.model.Feature',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			filters: [{
				exactMatch: true,
				property: 'active',
				value: true
			}],
			proxy: {
				url: '/atm/load/builder/rest/feature',
				type: 'linkrest'
			}
		}
		
	}
});