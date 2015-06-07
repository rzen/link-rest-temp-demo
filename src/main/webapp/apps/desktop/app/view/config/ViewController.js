Ext.define('Builder.view.config.ViewController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.config',

	onLoadAdd: function () {
		this.getView().getViewModel().getStore('loads').add({});
	},

	onFeatureAdd: function () {
		var vm = this.getView().getViewModel();

		console.log(vm.get('loadGrid.selection.id'), vm.get('loadGrid.selection'))

		vm.getStore('features').add({
			active: true,
			load_id: vm.get('loadGrid.selection.id')
		});
	},

	onEntryAdd: function () {
		var vm = this.getView().getViewModel();

		vm.getStore('entries').add({
			feature_id: vm.get('featureGrid.selection.id')
		});
	}
});