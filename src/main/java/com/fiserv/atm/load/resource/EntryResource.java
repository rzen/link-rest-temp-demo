package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Entry;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("entry")
@Produces(MediaType.APPLICATION_JSON)
public class EntryResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Entry> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Entry.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Entry> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Entry.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Entry> create(String data) {
		return LinkRest.create(Entry.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Entry> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Entry.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Entry.class, config).id(id).delete();
	}
}