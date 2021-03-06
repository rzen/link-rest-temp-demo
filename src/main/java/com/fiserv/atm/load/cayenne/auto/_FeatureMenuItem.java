package com.fiserv.atm.load.cayenne.auto;

import java.util.List;

import org.apache.cayenne.CayenneDataObject;
import org.apache.cayenne.exp.Property;

import com.fiserv.atm.load.cayenne.EntryMenu;
import com.fiserv.atm.load.cayenne.Feature;
import com.fiserv.atm.load.cayenne.FeatureMenu;
import com.fiserv.atm.load.cayenne.Flavor;

/**
 * Class _FeatureMenuItem was generated by Cayenne.
 * It is probably a good idea to avoid changing this class manually,
 * since it may be overwritten next time code is regenerated.
 * If you need to make any customizations, please use subclass.
 */
public abstract class _FeatureMenuItem extends CayenneDataObject {

    private static final long serialVersionUID = 1L; 

    @Deprecated
    public static final String ACTIVE_PROPERTY = "active";
    @Deprecated
    public static final String SCREEN_POS_PROPERTY = "screenPos";
    @Deprecated
    public static final String ENTRY_MENUS_PROPERTY = "entryMenus";
    @Deprecated
    public static final String FEATURE_PROPERTY = "feature";
    @Deprecated
    public static final String FEATURE_MENU_PROPERTY = "featureMenu";
    @Deprecated
    public static final String FLAVOR_PROPERTY = "flavor";

    public static final String ID_PK_COLUMN = "id";

    public static final Property<Boolean> ACTIVE = new Property<Boolean>("active");
    public static final Property<Integer> SCREEN_POS = new Property<Integer>("screenPos");
    public static final Property<List<EntryMenu>> ENTRY_MENUS = new Property<List<EntryMenu>>("entryMenus");
    public static final Property<Feature> FEATURE = new Property<Feature>("feature");
    public static final Property<FeatureMenu> FEATURE_MENU = new Property<FeatureMenu>("featureMenu");
    public static final Property<Flavor> FLAVOR = new Property<Flavor>("flavor");

    public void setActive(Boolean active) {
        writeProperty("active", active);
    }
    public Boolean getActive() {
        return (Boolean)readProperty("active");
    }

    public void setScreenPos(Integer screenPos) {
        writeProperty("screenPos", screenPos);
    }
    public Integer getScreenPos() {
        return (Integer)readProperty("screenPos");
    }

    public void addToEntryMenus(EntryMenu obj) {
        addToManyTarget("entryMenus", obj, true);
    }
    public void removeFromEntryMenus(EntryMenu obj) {
        removeToManyTarget("entryMenus", obj, true);
    }
    @SuppressWarnings("unchecked")
    public List<EntryMenu> getEntryMenus() {
        return (List<EntryMenu>)readProperty("entryMenus");
    }


    public void setFeature(Feature feature) {
        setToOneTarget("feature", feature, true);
    }

    public Feature getFeature() {
        return (Feature)readProperty("feature");
    }


    public void setFeatureMenu(FeatureMenu featureMenu) {
        setToOneTarget("featureMenu", featureMenu, true);
    }

    public FeatureMenu getFeatureMenu() {
        return (FeatureMenu)readProperty("featureMenu");
    }


    public void setFlavor(Flavor flavor) {
        setToOneTarget("flavor", flavor, true);
    }

    public Flavor getFlavor() {
        return (Flavor)readProperty("flavor");
    }


}
