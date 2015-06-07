Ext.define('Builder.view.ViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.builder_main',

	formulas: {
	},

	data: {
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
		},

		features: {
			model: 'Builder.model.Feature',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'stream',
				direction: 'ASC'
			}, {
				property: 'name',
				direction: 'ASC'
			}],
			filters: [{
				exactMatch: true,
				property: 'load',
				value: '{loadGrid.selection.id}'
			}],
			proxy: {
				url: '/atm/load/builder/rest/feature',
				type: 'linkrest'
			}
		},

		entries: {
			model: 'Builder.model.Entry',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'part',
				direction: 'ASC'
			}, {
				property: 'name',
				direction: 'ASC'
			}],
			filters: [{
				exactMatch: true,
				property: 'feature',
				value: '{featureGrid.selection.id}'
			}],
			proxy: {
				url: '/atm/load/builder/rest/entry',
				type: 'linkrest'
			}
		}

	}
});