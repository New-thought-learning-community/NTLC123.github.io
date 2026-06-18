// 你的专属 Supabase 数据库连接配置
const SUPABASE_URL = "https://cjyxxieokhkppokwziuy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_R203Lw5vihT_mnRquY4K5Q_uByNAERj";
// 初始化客户端（生成 supabase 控制变量)
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
