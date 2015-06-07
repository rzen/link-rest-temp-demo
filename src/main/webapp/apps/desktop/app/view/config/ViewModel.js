Ext.define('Builder.view.ViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.config',

	stores: {

		accounts: {
			model: 'Builder.model.Account',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/account',
				type: 'linkrest'
			}
		},

		entryTypes: {
			model: 'Builder.model.EntryType',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/entrytype',
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
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/feature',
				type: 'linkrest'
			}
		},

		flavors: {
			model: 'Builder.model.Flavor',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/flavor',
				type: 'linkrest',
				include: [
					'feature'
				]
			}
		},

		parts: {
			model: 'Builder.model.Part',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/part',
				type: 'linkrest'
			}
		},

		streams: {
			model: 'Builder.model.Stream',
			autoLoad: true,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			pageSize: 100,
			sorters: [{
				property: 'name',
				direction: 'ASC'
			}],
			proxy: {
				url: '/atm/load/builder/rest/stream',
				type: 'linkrest'
			}
		}

	}
});