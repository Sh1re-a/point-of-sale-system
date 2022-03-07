package se.shirwac.pos.system.service;

import org.apache.ibatis.jdbc.ScriptRunner;
import org.springframework.stereotype.Service;
import se.shirwac.pos.system.models.Dish;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.Reader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


//Skapat en färdig database man kan leka med, generarat datan från mocakaroGenerator
@Service
public class DatabaseSQL {
    private final String url = "mysql://zinovbg9yefpu1ga:rcwj68t64r2dq7ba@eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/idth8sqccos03m0d";
    private final String user = "root";
    private final String password = "";


    public Connection connect() throws SQLException {
        return DriverManager.getConnection(url,user,password);
    }


    public void insert() throws SQLException, FileNotFoundException {
        Connection con = connect();
        ScriptRunner sr = new ScriptRunner(con);
        Reader reader = new BufferedReader(new FileReader("ScriptSQL/dish.sql"));
        sr.runScript(reader);
    }
}
