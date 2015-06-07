package com.fiserv.atm.load.cayenne.auto;

import java.util.List;

import org.apache.cayenne.CayenneDataObject;
import org.apache.cayenne.exp.Property;

import com.fiserv.atm.load.cayenne.EntryMenuItem;
import com.fiserv.atm.load.cayenne.EntryType;
import com.fiserv.atm.load.cayenne.Part;

/**
 * Class _Entry was generated by Cayenne.
 * It is probably a good idea to avoid changing this class manually,
 * since it may be overwritten next time code is regenerated.
 * If you need to make any customizations, please use subclass.
 */
public abstract class _Entry extends CayenneDataObject {

    private static final long serialVersionUID = 1L; 

    @Deprecated
    public static final String ANCHOR_PROPERTY = "anchor";
    @Deprecated
    public static final String NAME_PROPERTY = "name";
    @Deprecated
    public static final String SCREEN_TEXT_PROPERTY = "screenText";
    @Deprecated
    public static final String VALUE_PROPERTY = "value";
    @Deprecated
    public static final String ENTRY_MENU_ITEMS_PROPERTY = "entryMenuItems";
    @Deprecated
    public static final String ENTRY_TYPE_PROPERTY = "entryType";
    @Deprecated
    public static final String PART_PROPERTY = "part";

    public static final String ID_PK_COLUMN = "id";

    public static final Property<String> ANCHOR = new Property<String>("anchor");
    public static final Property<String> NAME = new Property<String>("name");
    public static final Property<String> SCREEN_TEXT = new Property<String>("screenText");
    public static final Property<String> VALUE = new Property<String>("value");
    public static final Property<List<EntryMenuItem>> ENTRY_MENU_ITEMS = new Property<List<EntryMenuItem>>("entryMenuItems");
    public static final Property<EntryType> ENTRY_TYPE = new Property<EntryType>("entryType");
    public static final Property<Part> PART = new Property<Part>("part");

    public void setAnchor(String anchor) {
        writeProperty("anchor", anchor);
    }
    public String getAnchor() {
        return (String)readProperty("anchor");
    }

    public void setName(String name) {
        writeProperty("name", name);
    }
    public String getName() {
        return (String)readProperty("name");
    }

    public void setScreenText(String screenText) {
        writeProperty("screenText", screenText);
    }
    public String getScreenText() {
        return (String)readProperty("screenText");
    }

    public void setValue(String value) {
        writeProperty("value", value);
    }
    public String getValue() {
        return (String)readProperty("value");
    }

    public void addToEntryMenuItems(EntryMenuItem obj) {
        addToManyTarget("entryMenuItems", obj, true);
    }
    public void removeFromEntryMenuItems(EntryMenuItem obj) {
        removeToManyTarget("entryMenuItems", obj, true);
    }
    @SuppressWarnings("unchecked")
    public List<EntryMenuItem> getEntryMenuItems() {
        return (List<EntryMenuItem>)readProperty("entryMenuItems");
    }


    public void setEntryType(EntryType entryType) {
        setToOneTarget("entryType", entryType, true);
    }

    public EntryType getEntryType() {
        return (EntryType)readProperty("entryType");
    }


    public void setPart(Part part) {
        setToOneTarget("part", part, true);
    }

    public Part getPart() {
        return (Part)readProperty("part");
    }


}