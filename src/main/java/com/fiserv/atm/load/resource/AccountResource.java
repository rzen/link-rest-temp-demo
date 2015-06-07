package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Account;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("account")
@Produces(MediaType.APPLICATION_JSON)
public class AccountResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Account> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Account.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Account> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Account.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Account> create(String data) {
		return LinkRest.create(Account.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Account> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Account.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Account.class, config).id(id).delete();
	}
}