package com.xxxx.service;

import com.xxxx.entity.User;
import com.xxxx.entity.vo.MessageModel;
import com.xxxx.mapper.UserMapper;
import com.xxxx.util.GetSqlSession;
import com.xxxx.util.StringUtil;
import org.apache.ibatis.session.SqlSession;

/**
 * 业务逻辑
 */
public class UserService {
    /**
     * 用户登录
         1. 参数的非空判断
             如果参数为空
                将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
         2. 调用dao层的查询方法，通过用户名查询用户对象
         3. 判断用户对象是否为空
            如果为空，将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
         4. 判断数据库中查询到的用户密码与前台传递过来的密码作比较
            如果不相等，将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
         5. 登录成功，成功状态、提示信息、用户对象设置消息模型对象，并return
     * @param uname
     * @param upwd
     * @return
     */
    public MessageModel userLogin(String uname, String upwd) {
        MessageModel messageModel = new MessageModel();

        // 回显数据
        User u = new User();
        u.setUserName(uname);
        u.setUserPwd(upwd);
        messageModel.setObject(u);


        //  1. 参数的非空判断
        if (StringUtil.isEmpty(uname) || StringUtil.isEmpty(upwd)) {
            // 将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
            messageModel.setCode(0);
            messageModel.setMsg("用户姓名和密码不能为空！");
            return  messageModel;
        }

        // 2. 调用dao层的查询方法，通过用户名查询用户对象
        SqlSession session= GetSqlSession.createSqlSession();
        UserMapper userMapper = session.getMapper(UserMapper.class);
        User user = userMapper.queryUserByName(uname);

        // 3. 判断用户对象是否为空
        if (user == null ) {
            // 将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
            messageModel.setCode(0);
            messageModel.setMsg("用户不存在！");
            return  messageModel;
        }

        // 4. 判断数据库中查询到的用户密码与前台传递过来的密码作比较
        if  (!upwd.equals(user.getUserPwd())) {
            // 如果不相等，将状态码、提示信息、回显数据设置到消息模型对象中，返回消息模型对象
            messageModel.setCode(0);
            messageModel.setMsg("用户密码不正确！");
            return  messageModel;
        }
        // 登录成功，将用户信息设置到消息模型中
        messageModel.setObject(user);

        return messageModel;
    }
}
