package edu.ucr.cs.nle020.lucenesearcher;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class ArticleController {

    public static String readFile(String filename, Vector<Article> tweets) {
        String result = "";
        try {
            BufferedReader br = new BufferedReader(new FileReader(filename));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            while (line != null) {
                sb.append(line);
                JSONObject jobj = new JSONObject(line);
                String userName = jobj.getJSONObject("user").getString("screen_name");
                String content = jobj.getString("text");
                //String place;
                //String hashtags ="";
                String urlTitle = "";
                String date;
                try{
                    date = jobj.getString("created_at");
                }
                catch (JSONException excep)
                {
                    date = "";
                }

                String picture;
                try {
                    picture = jobj.getJSONObject("user").getString("profile_image_url_https");
                }
                catch (JSONException excep){
                    picture = "";
                }

                String tweetid;
                try {
                    tweetid = jobj.getString("id_str");
                }
                catch (JSONException excep){
                    tweetid = "";
                }
                String name;
                try {
                    name = jobj.getJSONObject("user").getString("name");
                }
                catch (JSONException excep)
                {
                 name = "";
                }
                //System.out.println("3");
                /*try{

                    place = jobj.getJSONObject("place").getString("full_name");
                }
                catch (JSONException jsonexc)
                {
                    place = "";
                }
                try{
                    JSONArray jsonA = jobj.getJSONObject("entities").getJSONArray("hashtags");
                    Integer length = jsonA.length();
                    if(length > 0)
                    {
                        JSONObject json = jsonA.getJSONObject(0);
                        hashtags = "#" + json.getString("text");
                    }
                    for(int j=1; j<length; j++) {
                        JSONObject json = jsonA.getJSONObject(j);
                        hashtags = hashtags + ", #"+ json.getString("text") ;
                    }
                }
                catch (JSONException jsonexc){

                    hashtags = "";
                }*/
                try{

                    urlTitle = jobj.getJSONObject("user").getString("url_title");
                }
                catch (JSONException jsonexc)
                {
                    urlTitle = "";
                }

                /*if(jobj.has("place")){
                   place = jobj.getJSONObject("place").getString("full_name");
                   System.out.println("2");
                }
                else {
                    place = "";
                    System.out.println("1");
                }*/
                //System.out.println("Name: " + userName);
                // System.out.println("Content: " + content);
                tweets.addElement(new Article(userName,content,urlTitle,date,picture, tweetid,name));
                line = br.readLine();
            }
            result = sb.toString();
        } catch(Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    static List<Article> articles;

    static {
        articles = new ArrayList<>();
        Vector<Article> tweets = new Vector();
        //Article art = new Article("superkristen", "wants to sleep", "athome");
        //tweets.add(0, art);
        for (Integer i = 0; i < 10; ++i) {
            String jsonData = readFile("./src/main/java/edu/ucr/cs/nle020/lucenesearcher/data/tweets" + i + ".json", tweets);
            // String jsonData = readFile("D:\\CS172\\CS172\\search-webapp\\lucene-searcher\\src\\main\\java\\edu\\ucr\\cs\\nle020\\lucenesearcher\\data\\tweets" + i + ".json", tweets);
            //JSONObject jobj = new JSONObject(jsonData);

            for (Integer k = 0; k < tweets.size(); ++k) {
                articles.add(new Article(tweets.get(k).getUserName(), tweets.get(k).getContent(), tweets.get(k).getUrlTitles(), tweets.get(k).getDate(),
                        tweets.get(k).getPicture(),tweets.get(k).getTweetid(),tweets.get(k).getName()));

            }
            tweets.clear();

        }
    }

    @GetMapping("/articles")
    public List<Article> searchArticles(
            @RequestParam(required=false, defaultValue="") String query) {
//        if (query.isEmpty())
//            return articles;

        List<Article> matches = new ArrayList<>();
        for (Article article : articles) {
            if (article.content.contains(query))
                matches.add(article);
        }
        return matches;
    }
}
