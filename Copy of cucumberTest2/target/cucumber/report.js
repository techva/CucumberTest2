$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@tag"
    },
    {
      "line": 21,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 22,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#@tag1"
    },
    {
      "line": 25,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 26,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 27,
      "value": "#And some other precondition"
    },
    {
      "line": 28,
      "value": "#When I complete action"
    },
    {
      "line": 29,
      "value": "#\tAnd some other action"
    },
    {
      "line": 30,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 31,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 32,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 34,
      "value": "#@tag2"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 36,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 37,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 38,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 40,
      "value": "#Examples:"
    },
    {
      "line": 41,
      "value": "#    | name  |value | status |"
    },
    {
      "line": 42,
      "value": "#    | name1 |  5   | success|"
    },
    {
      "line": 43,
      "value": "#    | name2 |  7   | Fail   |"
    }
  ],
  "line": 45,
  "name": "Feature TItle",
  "description": "",
  "id": "feature-title",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 46,
  "name": "Scenario Title",
  "description": "",
  "id": "feature-title;scenario-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I Opened Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I open USCIS website",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_Opened_Chrome_Browser()"
});
formatter.result({
  "duration": 3367537786,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_open_USCIS_website()"
});
formatter.result({
  "duration": 7289117323,
  "status": "passed"
});
});