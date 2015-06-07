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

	dockedItems: [{
		dock: 'bottom',
		xtype: 'pagingtoolbar',
		store: 'ext-empty-store'
	}],

	// TODO: Hack alert
	initPagingToolbar: function () {
		var me = this,
			pause = 5600;

		if (me.store.isStore && me.store.getStoreId() !== 'ext-empty-store') {
			me.getDockedItems('pagingtoolbar')[0].setStore(me.store);
		} else {
			Ext.Function.defer(function () {
				me.initPagingToolbar();
			}, pause);
		}
	},

	initComponent: function() {
		this.callParent(arguments);
		this.initPagingToolbar();
	}
});