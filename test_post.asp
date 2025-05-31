<%
dim fname,city
fname=request.form("name")
city=request.form("city")
response.write("hello" & fname &", where are you from" & city & ".")
%>