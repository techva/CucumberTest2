package cucumberTest2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources",
       //features = "feature",
        //glue = "src/test/java/cucumberTest2",
        		glue = "cucumberTest2",
       // dryRun=true,
        plugin = { 
                    "pretty",
                    "html:target/cucumber",
                } 

        )
public class runTest2 {

}
