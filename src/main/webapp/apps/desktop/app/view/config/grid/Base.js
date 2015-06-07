Ext.define('Builder.view.config.grid.Base', {
	extend: 'Ext.grid.Panel',

	requires: [
		'Ext.grid.plugin.CellEditing'
	],

	deferEmptyText: false,

	forceFit: false,
	border: true,
	autoScroll: true,

	viewConfig: {
		stripeRows: true
	},

	plugins: [
		'cellediting'
	],

	tools: [
		{
			type: 'plus',
			tooltip: 'Add',
			handler: function (ev, toolEl, panelHeader) {
				var grid = this.up('grid'),
					vm = grid.ownerCt.getViewModel();

				grid.getStore().add({});
			}

		}, {
			type: 'minus',
			tooltip: 'Delete',
			handler: function (ev, toolEl, panelHeader) {
				var grid = this.up('grid');
				Ext.Msg.confirm('Are you sure?', 'Click OK to delete selected record.', function (btn) {
					if (btn==='yes') {
						grid.getStore().remove(grid.getSelection());
					}
				})
			}

		}
	],

	initComponent: function() {
		this.dockedItems = [{
			dock: 'bottom',
			xtype: 'pagingtoolbar',
			store: this.store
		}];

		this.callParent(arguments);
	}
});