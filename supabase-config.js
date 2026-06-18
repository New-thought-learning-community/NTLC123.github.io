const SUPABASE_URL = "https://cjyxxieokhkppokwziuy.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_R203Lw5vihT_mnRquY4K5Q_uByNAERj";
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function NTLC_Login(email, password) {   const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {       alert("登录失败：" + error.message);       return { success: false, error: error.message };   }   alert("登录成功！");
                                            return { success: true, user: data.user };
async function NTLC_Register(email, password) {   const { data, error } = await supabase.auth.signUp({ email, password }); if (error) {
alert("注册失败：" + error.message);       return { success: false, error: error.message }; }   alert("注册成功！请检查邮箱激活。");return { success: true }
// 发帖法宝
async function NTLC_CreatePost(textContent) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "请先登录" };
  return await supabase.from('posts').insert([{ content: textContent }]);
}
        // 读帖法宝（按时间倒序拿所有帖子）
              async function NTLC_GetPosts() {
                return await supabase.from('posts').select('*').order('created_at', { ascending: false });}
//  管理员读贴法宝（管理员：拿所有帖子来审核）
        async function NTLC_AdminGetPosts() {
          return await supabase.from('posts').select('*').order('created_at', { ascending: false });
        }
    // 审核动作法宝（通过或者封禁：传入帖子id和新状态 'approved' 或 'banned'）
      async function NTLC_ReviewPost(postId, newStatus) {
        return await supabase.from('posts').update({ status: newStatus }).eq('id', postId);}
