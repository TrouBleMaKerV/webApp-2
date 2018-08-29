package appserver.server.impl;

import appserver.server.SaveServer;
import appserver.vo.LotteryVO;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Service;


import java.io.*;
import java.util.ArrayList;
import java.util.List;
@Service
public class SaveServerImpl implements SaveServer {
    @Override
    public  List<LotteryVO> get() {
        File file = new File("/root/data.json");
        Gson gson = new Gson();
        List<LotteryVO> result = new ArrayList<>();
        BufferedReader reader = null;
        try {
            result = gson.fromJson(new FileReader(file),new TypeToken<List<LotteryVO>>(){}.getType());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return result;

    }

    @Override
    public boolean save(LotteryVO vo) {
        List<LotteryVO> lotteryVOList = this.get();
        lotteryVOList.remove(0);
        lotteryVOList.add(vo);
        Gson gson = new Gson();
        String result = gson.toJson(lotteryVOList,new TypeToken<List<LotteryVO>>(){}.getType());
        try {
            FileWriter writer=new FileWriter("/root/data.json");
            writer.write(result);
            writer.close();
            NumServer.getInstance().init();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return true;
    }
}
