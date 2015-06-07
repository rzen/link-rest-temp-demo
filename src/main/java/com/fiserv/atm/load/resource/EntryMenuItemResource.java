package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.EntryMenuItem;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("entrymenuitem")
@Produces(MediaType.APPLICATION_JSON)
public class EntryMenuItemResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<EntryMenuItem> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(EntryMenuItem.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<EntryMenuItem> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(EntryMenuItem.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<EntryMenuItem> create(String data) {
		return LinkRest.create(EntryMenuItem.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<EntryMenuItem> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(EntryMenuItem.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(EntryMenuItem.class, config).id(id).delete();
	}
}