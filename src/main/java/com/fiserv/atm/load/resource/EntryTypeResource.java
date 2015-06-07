package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.EntryType;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("entrytype")
@Produces(MediaType.APPLICATION_JSON)
public class EntryTypeResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<EntryType> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(EntryType.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<EntryType> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(EntryType.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<EntryType> create(String data) {
		return LinkRest.create(EntryType.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<EntryType> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(EntryType.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(EntryType.class, config).id(id).delete();
	}
}