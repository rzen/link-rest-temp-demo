Ext.define('Builder.view.feature.Screen', {
	extend: 'Ext.panel.Panel',

	xtype: 'feature_screen',

	width: 500,

	viewModel: {
		type: 'feature'
	},

	title: 'Feature Screen',
	border: true,

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	defaults: {
		xtype: 'container',
		flex: 1,
		defaults: {
			xtype: 'feature_slot',
			flex: 1,
			defaults: {
				bind: {
					store: '{features}'
				}
			}
		}
	},

	items: [
		{
			layout: {
				type: 'vbox',
				align: 'begin'
			},
			items: [
				{ screenPosition: '1' },
				{ screenPosition: '2' },
				{ screenPosition: '3' },
				{ screenPosition: '4' }
			]
		}, {
			layout: {
				type: 'vbox',
				align: 'end'
			},
			items: [
				{ screenPosition: '5' },
				{ screenPosition: '6' },
				{ screenPosition: '7' },
				{ screenPosition: '8' }
			]
		}
	]
});