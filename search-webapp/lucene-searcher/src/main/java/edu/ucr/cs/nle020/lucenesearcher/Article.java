package edu.ucr.cs.nle020.lucenesearcher;

public class Article {

    public String userName;
    public String content;
    //public String place;
    //public String hashtags;
    public String urlTitles;
    public String date;
    public String picture;
    public String tweetid;
    public String name;



    public Article(){}

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getTweetid() {
        return tweetid;
    }

    public void setTweetid(String tweetid) {
        this.tweetid = tweetid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Article(String userName, String content, String urlTitles, String date, String picture, String tweetid, String name) {
        this.userName = userName;
        this.content = content;
        //this.place = place;
        //this.hashtags = hashtags;
        this.urlTitles = urlTitles;
        this.date = date;
        this.picture = picture;
        this.tweetid = tweetid;
        this.name = name;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

   /* public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getHashtags() {
        return hashtags;
    }

    public void setHashtags(String hashtags) {
        this.hashtags = hashtags;
    }*/

    public String getUrlTitles() {
        return urlTitles;
    }

    public void setUrlTitles(String urlTitles) {
        this.urlTitles = urlTitles;
    }

    @Override
    public String toString() {
        return String.format("Article[id=%s, title=%s, body=%s]", userName, content, urlTitles);
    }
}
