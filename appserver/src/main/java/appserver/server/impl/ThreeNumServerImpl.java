package appserver.server.impl;

import appserver.server.SaveServer;
import appserver.server.ThreeNumServer;
import appserver.vo.LotteryVO;
import appserver.vo.ResultVO;
import appserver.vo.Variation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ThreeNumServerImpl implements ThreeNumServer {
    private List<LotteryVO> lotteryVOList ;
    private NumServer numServer;

    public ThreeNumServerImpl() {
        numServer = NumServer.getInstance();
        lotteryVOList = numServer.getLotteryVOList();
    }

    @Override
    public List<ResultVO> getResult(String a, String b, String c) {

        List<ResultVO> result = new ArrayList<>();
        //已经存在的相同的行，不重复计算
        List<Integer> exist = new ArrayList<>();
        for (int i = 0; i < lotteryVOList.size(); i++) {
            //如果出现过相同，则不调过
            if (exist.indexOf(i) != -1) {
                continue;
            }
            //计算出现的次数
            int tempNum = 1;
            ResultVO resultVO = new ResultVO();
            resultVO.result.add(i);
            int[] i1 = this.getNums(i, a, b, c);
            for (int j = i + 1; j < lotteryVOList.size(); j++) {
                int[] j1 = this.getNums(j, a, b, c);
                if (numServer.isSame(i1, j1)) {
                    tempNum += 1;
                    resultVO.result.add(j);
                    exist.add(j);
                }
            }
            if (result.size() < 6 && tempNum >= 2) {
                result.add(resultVO);
            } else if (tempNum >= 2) {
                for (int j = 0; j < result.size(); j++) {
                    if (result.get(j).result.size() < resultVO.result.size()) {
                        result.remove(j);
                        result.add(resultVO);
                    }
                }
            }
        }
        return result;
    }

    @Override
    public List<Variation> getVariationResult(String a, String b, String c) {
        List<Variation> result = new ArrayList<>();
        List<Integer> exist ;
        //有六种可能
        for (int j = 0; j < 6; j++) {
            exist  = new ArrayList<>();
            for (int i = 0; i < lotteryVOList.size(); i++) {
                if (exist.indexOf(i) != -1) {
                    continue;
                }
                int tempNum = 1;
                Variation variation = new Variation();
                //三种往上凸的，排除第一行
                if ((j == 0 || j == 2 || j == 4) && i == 0) {
                    continue;
                } else if ((j == 1 || j == 3 || j == 5) && i == (lotteryVOList.size() - 1)) {
                    //三种往下凸的，排除最后行
                    continue;
                }
                int[] i1 = this.getViariationNums(i, j, a, b, c);
                for (int k = i + 1; k < lotteryVOList.size(); k++) {
                    if ((j == 1 || j == 3 || j == 5) && k == (lotteryVOList.size() - 1)) {
                        continue;
                    }
                    int[] k1 = this.getViariationNums(k, j, a, b, c);
                    //如果相等
                    if (numServer.isSame(i1, k1)) {
                        tempNum += 1;
                        exist.add(k);
                        this.addResult(variation, j, k, a, b, c);
                    }
                }
                if (result.size() < 6 && tempNum >= 2) {
                    this.addResult(variation, j, i, a, b, c);
                    result.add(variation);
                } else if (tempNum >= 2) {
                    this.addResult(variation, j, i, a, b, c);
                    for (int k = 0; k < result.size(); k++) {
                        if (result.get(k).one.size() < variation.one.size() || result.get(k).two.size() < variation.two.size()) {
                            result.remove(k);
                            result.add(variation);
                        }
                    }
                }
            }
        }
        return result;
    }

    //获取三个列的数字
    private int[] getNums(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i, a);
        i1[1] = numServer.getNum(i, b);
        i1[2] = numServer.getNum(i, c);
        return i1;
    }

    private int[] getViariationNums(int i, int j, String a, String b, String c) {
        switch (j) {
            case 0:
                return getNumLeftUp(i, a, b, c);
            case 1:
                return getNumLeftDown(i, a, b, c);
            case 2:
                return getNumMidUp(i, a, b, c);
            case 3:
                return getNumMidDown(i, a, b, c);
            case 4:
                return getNumRightUp(i, a, b, c);
            case 5:
                return getNumRightDown(i, a, b, c);
        }
        return null;
    }

    //获取中间在上的三位数
    private int[] getNumMidUp(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i, a);
        i1[1] = numServer.getNum(i - 1, b);
        i1[2] = numServer.getNum(i, c);
        return i1;
    }

    //获取中间在下的三位数
    private int[] getNumMidDown(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i, a);
        i1[1] = numServer.getNum(i + 1, b);
        i1[2] = numServer.getNum(i, c);
        return i1;
    }

    //获取左边在上的三位数
    private int[] getNumLeftUp(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i - 1, a);
        i1[1] = numServer.getNum(i, b);
        i1[2] = numServer.getNum(i, c);
        return i1;
    }

    //获取左边在下的三位数
    private int[] getNumLeftDown(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i + 1, a);
        i1[1] = numServer.getNum(i, b);
        i1[2] = numServer.getNum(i, c);
        return i1;
    }

    //获取右边在上的三位数
    private int[] getNumRightUp(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i, a);
        i1[1] = numServer.getNum(i, b);
        i1[2] = numServer.getNum(i - 1, c);
        return i1;
    }

    //获取右边在下的三位数
    private int[] getNumRightDown(int i, String a, String b, String c) {
        int[] i1 = new int[3];
        i1[0] = numServer.getNum(i, a);
        i1[1] = numServer.getNum(i, b);
        i1[2] = numServer.getNum(i + 1, c);
        return i1;
    }

    private void addResult(Variation variation, int j, int k, String a, String b, String c) {
        switch (j) {
            case 0:
                variation.add(a, k - 1);
                variation.add( b, k);
                variation.add(c, k);
                break;
            case 1:
                variation.add( a, k + 1);
                variation.add( b, k);
                variation.add(c, k);
                break;
            case 2:
                variation.add( a, k);
                variation.add( b, k - 1);
                variation.add( c, k);
                break;
            case 3:
                variation.add( a, k);
                variation.add(b, k + 1);
                variation.add( c, k);
                break;
            case 4:
                variation.add(a, k);
                variation.add(b, k);
                variation.add(c, k - 1);
                break;
            case 5:
                variation.add(a, k);
                variation.add(b, k);
                variation.add(c, k + 1);
                break;
        }
    }

}
