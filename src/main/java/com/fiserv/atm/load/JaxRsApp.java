package com.fiserv.atm.load;

import com.fiserv.atm.load.resource.*;
import com.nhl.link.rest.runtime.LinkRestBuilder;
import com.nhl.link.rest.runtime.adapter.sencha.SenchaAdapter;
import org.apache.cayenne.configuration.server.ServerRuntime;
import org.apache.cayenne.configuration.server.ServerRuntimeBuilder;
import org.glassfish.jersey.server.ResourceConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PreDestroy;
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/rest")
public class JaxRsApp extends ResourceConfig {

	private static final Logger LOGGER = LoggerFactory.getLogger(JaxRsApp.class);

	private ServerRuntime cayenneRuntime;

	public JaxRsApp() {

		// init persistence layer...
		this.cayenneRuntime = createCayenne();

		// init and bootstrap LinkRest
		register(
			LinkRestBuilder.builder(cayenneRuntime)
			.adapter(new SenchaAdapter())
			.build()
		);
		
		// expose application REST endpoints
		packages(AccountResource.class.getPackage().getName());
		packages(EntryTypeResource.class.getPackage().getName());
		packages(FeatureResource.class.getPackage().getName());
		packages(FlavorResource.class.getPackage().getName());
		packages(PartResource.class.getPackage().getName());
		packages(StreamResource.class.getPackage().getName());

		packages(LoadResource.class.getPackage().getName());
		packages(EntryMenuResource.class.getPackage().getName());
		packages(EntryMenuItemResource.class.getPackage().getName());
		packages(FeatureMenuResource.class.getPackage().getName());
		packages(FeatureMenuItemResource.class.getPackage().getName());
	}

	@PreDestroy
	public void preDestroy() {
		LOGGER.info("Container shutdown...");

		if (cayenneRuntime != null) {
			LOGGER.info("Shutting down Cayenne");
			cayenneRuntime.shutdown();
			cayenneRuntime = null;
		}
	}

	private static ServerRuntime createCayenne() {
		return new ServerRuntimeBuilder()
				.jdbcDriver("com.mysql.jdbc.Driver")
				.url("jdbc:mysql://localhost")
				.addConfig("cayenne-project.xml")
				.user(System.getProperty("mysql-user"))
				.password(System.getProperty("mysql-password"))
				.build();
	}
}
