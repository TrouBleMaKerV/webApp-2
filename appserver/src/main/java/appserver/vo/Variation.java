package appserver.vo;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Variation {
    public List<Integer> one;
    public List<Integer> two;
    public List<Integer> three;
    public List<Integer> four;
    public Variation(){
        one = new ArrayList<>();
        two = new ArrayList<>();
        three = new ArrayList<>();
        four = new ArrayList<>();
    }
    public void add(String a, int k) {
        switch (a) {
            case "one":
                this.one.add(k);
                break;
            case "two":
                this.two.add(k);
                break;
            case "three":
                this.three.add(k);
                break;
            case "four":
                this.four.add(k);
        }
    }
}
