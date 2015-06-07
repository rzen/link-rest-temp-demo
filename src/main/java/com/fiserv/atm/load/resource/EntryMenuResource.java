package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.EntryMenu;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("entrymenu")
@Produces(MediaType.APPLICATION_JSON)
public class EntryMenuResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<EntryMenu> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(EntryMenu.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<EntryMenu> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(EntryMenu.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<EntryMenu> create(String data) {
		return LinkRest.create(EntryMenu.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<EntryMenu> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(EntryMenu.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(EntryMenu.class, config).id(id).delete();
	}
}