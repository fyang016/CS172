public class tweets{
    public String userName;
    public String content;
    public String place;
    public String hashtags;
    public String urlTitles;

    public tweets(){}

    public tweets(String userName, String content, String place, String hashtags, String urlTitles) {
        this.userName = userName;
        this.content = content;
        this.place = place;
        this.hashtags = hashtags;
        this.urlTitles = urlTitles;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPlace() {
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
    }

    public String getUrlTitles() {
        return urlTitles;
    }

    public void setUrlTitles(String urlTitles) {
        this.urlTitles = urlTitles;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName()
    {
        return userName;
    }

    public String toString() {
        return String.format("Tweets[userName=%s, content=%s, urlTitles=%s]", userName, content, urlTitles);
    }
}