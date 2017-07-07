package cucumberTest2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	static String driverPath = "C://Users//Anik//Downloads//chromedriver_win32//";
	public WebDriver driver;
	public String baseURL;	
	
	@Given("^I Opened Chrome Browser$")
	public void i_Opened_Chrome_Browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", driverPath+"chromedriver.exe");
		driver = new ChromeDriver();
		
	    //throw new PendingException();
	}

	@Then("^I open USCIS website$")
	public void i_open_USCIS_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		baseURL = "https://www.uscis.gov/";  
		driver.get(baseURL); 
	    //throw new PendingException();
	}


}
